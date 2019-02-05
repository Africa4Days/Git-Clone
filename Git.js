class Git {
  constructor(name) {
    this.name = name;
  }

  commit(message) {
    let commit = new Commit(message);
    return commit;
  }
}

class Commit {
  constructor(id, message) {
    this.id = id;
    this.message = message;
  }
}
