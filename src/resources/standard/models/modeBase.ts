export type Mode = 'V' | 'I' | 'U' | 'D' | 'S' | 'P' | 'R';

export const Mode = {
  VIEW: 'V' as Mode,
  EDIT: 'U' as Mode,
  INSERT: 'I' as Mode,
  DELETE: 'D' as Mode,
  SEARCH: 'S' as Mode,
  PROCESS: 'P' as Mode,
  REPORT: 'R' as Mode,
};
