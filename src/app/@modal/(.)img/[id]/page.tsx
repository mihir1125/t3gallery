import { getImage } from "~/server/queries";

export default async function PhotoModal({
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
    return <div><img src={image.url} alt={image.name} className="w-96"/></div>;
}