export default class ErrorRepository {
  constructor() {
    this.members = new Map([[1, 'Ошибка 1']]);
  }

  transalate(codeErr) {
    if (this.members.has(codeErr)) {
      return this.members.get(codeErr);
    }
    return 'Unknown error';
  }
}
