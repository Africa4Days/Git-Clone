class Commit {
  constructor(id, parent, message) {
    this.id = id; // commit id
    this.message = message; // commit message
    this.parent = parent; // the commits parent
  }
}

class Branch {
  constructor(name, commit) {
    this.name = name; // name of the branch
    this.commit = commit; // commit the branch is pointing to
  }
}

// THE MAIN GIT CLASS
class Git {
  constructor(name) {
    this.name = name; // repo name
    this.lastCommitId = -1; // last commit id
    this.branches = []; // stores a list of all the branches
    let master = new Branch("master", null); // pass null as commit because there are 0 commits currently
    this.branches.push(master); // store the master branch in the branches array
    this.HEAD = master; // HEAD points to the current branch
  }

  commit(message) {
    let commit = new Commit(++this.lastCommitId, this.HEAD.commit, message);
    this.HEAD.commit = commit; // keeping track of the commits with the HEAD prop
    return commit;
  }

  log() {
    let commit = this.HEAD.commit;
    let history = [];

    while (commit) {
      history.push(commit);
      commit = commit.parent;
    }

    console.log(history);
    return history;
  }

  checkout(branchName) {
    if (this.branches.indexOf(branchName) !== -1) {
      // the current branch exists
      let index = this.branches.indexOf(branchName);
      console.log(`Switched to existing branch ${branchName}.`);
      this.HEAD = this.branches[index];
      return this;
    } else {
      let newBranch = new Branch(branchName, this.HEAD.commit);
      this.branches.push(newBranch);
      this.HEAD = newBranch;
      console.log(`Switched to new branch ${branchName}.`);
      return this;
    }
  }
}

let repo = new Git("repo-sample");
repo.commit("Initial commit");
repo.commit("This is the second commit");
repo.log();
