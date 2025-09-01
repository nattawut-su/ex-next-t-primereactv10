# 1. Build stage
FROM node:20-bookworm-slim AS builder
RUN apt-get update && apt-get upgrade -y && apt-get clean

WORKDIR /app

COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./
RUN \
	if [ -f package-lock.json ]; then npm ci; \
	elif [ -f pnpm-lock.yaml ]; then npm install -g pnpm && pnpm install; \
	elif [ -f yarn.lock ]; then yarn install; \
	else npm install; \
	fi

COPY . .
RUN npm run build

# 2. Production image
FROM node:20-bookworm-slim AS runner
RUN apt-get update && apt-get upgrade -y && apt-get clean

WORKDIR /app

ENV NODE_ENV=production

# Copy only the necessary files from the build stage
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

CMD ["node", "server.js"]
