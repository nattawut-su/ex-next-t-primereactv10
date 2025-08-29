import { setupWorker } from 'msw/browser';
import { handlers as personHandlers } from './handlers/person';

export const worker = setupWorker(...personHandlers);
