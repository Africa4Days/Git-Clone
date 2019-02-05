class Git {
  constructor(name) {
    this.name = name;
    this.lastCommitId = -1;
    this.HEAD = null;
  }

  commit(message) {
    let commit = new Commit(++this.lastCommitId, message);
    return commit;
  }

  log() {
    let history = [];

    return history;
  }
}

class Commit {
  constructor(id, message) {
    this.id = id;
    this.message = message;
  }
}

let repo = new Git("simple-repo");
repo.commit("Initial commit");
console.log(repo);
