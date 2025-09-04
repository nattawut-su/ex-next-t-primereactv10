import { delay, http, HttpResponse } from 'msw';
import { db, nextId } from '../db';

const API = '/mock-api/person';

export const handlers = [
  // GET /api/person (list)
  http.get(`${API}`, () => HttpResponse.json(db.personData, { status: 200 })),
  http.get(`${API}/delay`, async () => {
    await delay(8000);
    return HttpResponse.json(db.personData, { status: 200 });
  }),

  // GET /api/person/:id
  http.get(`${API}/:id`, ({ params }) => {
    console.log('MSW intercepted /api/person/:id', params);
    const u = db.personData.find((x) => x.id === Number(params.id));
    return u ? HttpResponse.json(u, { status: 200 }) : new HttpResponse('Not Found', { status: 404 });
  }),

  // POST /api/person
  http.post(`${API}`, async ({ request }) => {
    const body = (await request.json()) as { fname: string; lname: string };
    if (!body?.fname || !body?.lname) return new HttpResponse('fname & lname required', { status: 400 });
    const nu = { id: nextId(), ...body };
    db.personData.push(nu);
    return HttpResponse.json(nu, { status: 201 });
  }),

  // PUT /api/person/:id
  http.put(`${API}/:id`, async ({ params, request }) => {
    const id = Number(params.id);
    const body = (await request.json()) as { fname: string; lname: string };
    if (!body?.fname && !body?.lname) return new HttpResponse('fname & lname required', { status: 400 });
    const idx = db.personData.findIndex((u) => u.id === id);
    if (idx === -1) return HttpResponse.json({ message: 'Not found' }, { status: 404 });

    db.personData[idx] = { ...db.personData[idx], ...body };
    return HttpResponse.json(db.personData[idx], { status: 200 });
  }),

  // DELETE /api/person/:id
  http.delete(`${API}/:id`, ({ params }) => {
    const id = Number(params.id);
    const idx = db.personData.findIndex((u) => u.id === id);
    if (idx === -1) return HttpResponse.json({ message: 'Not found' }, { status: 404 });

    db.personData.splice(idx, 1);
    // 204 no content
    return new HttpResponse(null, { status: 204 });
  }),
];
