import IconListItem from "@/components/atoms/IconListItem";
import Time from "@/assets/svgs/Time.svg";

export default function Home() {
    return (
        <>
            <div className="max-w-[255px]">
                <IconListItem
                    active={true}
                    href="#"
                    title="Create Sales Order"
                />
                <Time className="text-green w-6 h-6"  />
            </div>
        </>
    );
}
