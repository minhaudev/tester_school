import IconListItem from "@/components/atoms/IconListItem";
export default function Home() {
    return (
        <>
            <div className="max-w-[255px]">
                <IconListItem
                    active={true}
                    href="#"
                    title="Create Sales Order"
                />
            </div>
        </>
    );
}
