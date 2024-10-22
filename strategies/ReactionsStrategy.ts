import { ReactionController } from "../types/ReactionController.interface";
import { IReactionChip } from "../types/Reactions.interface";

export class ReactionsStrategy<T> {
  private controller: ReactionController<T, {}>;
  private readonly historyId: number;
  private readonly onGetReactionValue: (v: T) => string;
  private readonly onGetUserName: (v: T) => string;

  constructor(
    historyId: number,
    controller: ReactionController<T, {}>,
    onGetReactionValue: (v: T) => string,
    onGetUserName: (v: T) => string
  ) {
    this.historyId = historyId;
    this.controller = controller;
    this.onGetReactionValue = onGetReactionValue;
    this.onGetUserName = onGetUserName;
  }

  groupReactionChips(array: T[]): IReactionChip[] {
    return array.reduce((acc, value) => {
      const currentItem = acc.find((item) => item.emoji === this.onGetReactionValue(value));
      if (currentItem) {
        return acc.map((item) => {
          if (item.emoji === this.onGetReactionValue(value))
            return {
              emoji: item.emoji,
              usersCount: item.usersCount + 1,
              userNames: [...item.userNames, this.onGetUserName(value)],
            };
          return item;
        });
      } else
        acc = [
          ...acc,
          {
            emoji: this.onGetReactionValue(value),
            usersCount: 1,
            userNames: [this.onGetUserName(value)],
          },
        ];
      return acc;
    }, [] as IReactionChip[]);
  }

  async onSendReaction(reaction: string): Promise<T[] | null> {
    let awaitedResults: T[] | null = null;
    await this.controller
      .reaction(this.historyId, {
        value: `${reaction}`,
      })
      .then((res) => (awaitedResults = (res as any)?.reactions ?? null))
      .catch(() => {
        throw Error;
      });
    return awaitedResults;
  }
}
