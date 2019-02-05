class Commit {
  constructor(id, parent, message) {
    this.id = id; // commit id
    this.message = message; // commit message
    this.parent = parent; // the commits parent
  }
}

class Git {
  constructor(name) {
    this.name = name; // repo name
    this.lastCommitId = -1; // last commit id
    this.HEAD = null; // reference to the last commit
  }

  commit(message) {
    let commit = new Commit(++this.lastCommitId, this.HEAD, message);
    this.HEAD = commit; // keeping track of the commits with the HEAD prop
    return commit;
  }

  log() {
    let commit = this.HEAD;
    let history = [];

    while (commit) {
      history.push(commit);
      commit = commit.parent;
    }

    console.log(history);
    return history;
  }
}

let repo = new Git("repo-sample");
repo.commit("Initial commit");
repo.commit("This is the second commit");
repo.log();
