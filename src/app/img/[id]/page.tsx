import { getImage } from "~/server/queries";
import Image from "next/image";
import FullPageImageView from "~/components/full-image-page";

export default async function PhotoPage({
    params,
} : {
    params: Promise<{ id: string }>;
}) {
    const { id: photoId } = await params;
    const idAsNumber = Number(photoId);
    if (Number.isNaN(idAsNumber)) {
        return <div>Invalid photo ID</div>;
    }
    const image = await getImage(idAsNumber);
    return <FullPageImageView id={idAsNumber}/>;
}