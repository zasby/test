import { makeAutoObservable, runInAction } from "mobx";
import { RootStore } from "./rootStore";
import { api } from "../services";
import { BoardDto } from "../api";

export default class BoardStore {
  root: RootStore;
  private boardId: number | null;
  private board: BoardDto | null;

  constructor(root: RootStore) {
    makeAutoObservable(this);
    this.root = root;
    this.board = null;
    this.boardId = null;
  }

  get getBoard(): BoardDto | null {
    return this.board;
  }

  get getBoardId(): number | null {
    return this.boardId;
  }

  setBoardId(id: number | null): void {
    this.boardId = id;
  }

  setBoard(board: BoardDto | null) {
    this.board = board;
    // this.setBoardId(board?.id ?? 0);
  }

  fetchBoard(boardId: number | null) {
    if (boardId == null) return;
    api.board.getById(boardId).then((board) => {
      runInAction(() => {
        this.board = board ?? null;
        this.boardId = board?.id ?? 0;
      });
    });
  }
}
