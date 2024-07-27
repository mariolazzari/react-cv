type Network = "github" | "linkedin" | "facebook" | "instagram" | "x" | "link";

export type Profile = {
  network: Network;
  username: string;
  url: string;
};
