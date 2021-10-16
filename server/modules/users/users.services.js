export default class Services {
  constructor(repository) {
    this.repository = repository;
  }

  create(draft) {
    return this.repository.create(draft);
  }

  play(id) {
    return this.repository.play(id);
  }
}
