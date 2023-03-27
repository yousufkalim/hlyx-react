import { api } from "../utils/axios";

export const getBasicCardInfo = async (cardId: string) => {
  try {
    const { data } = await api.get(`card/find/base-info/${cardId}`, {
      headers: {
        Accept: "application/json",
      },
    });

    const { card, message, code } = data;
    if (code === 200) {
      return card;
    } else {
      throw new Error(message);
    }
  } catch (err: unknown) {
    return (
      (err as any)?.message || "Something went wrong. Please try again later."
    );
  }
};
