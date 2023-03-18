import { IMedia } from "@/utils/types";

type Props = {
  idMedia: IMedia["id"];
};

export default function MediaDetail({ idMedia }: Props) {
  // const data = awaitt
  return (
    <main className="text-white">
      {" "}
      Esta es la media {idMedia} entonces llego la media
    </main>
  );
}
