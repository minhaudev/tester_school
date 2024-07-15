import IconListItem from "@/components/atoms/IconListItem";
import Time from "@/assets/svgs/Time.svg";
import Button from "@/components/atoms/Button/Button";

export default function Home() {
    const handleClick = () => {
        console.log("ok");
    };
    return (
        <>
            <div className="max-w-[255px]">
                <IconListItem
                    active={true}
                    href="#"
                    title="Create Sales Order"
                />
                <Time className="text-green w-6 h-6" />
                <Time className="text-green w-6 h-6" />
            </div>
            <Button value={"hello"} className="!bg-white !text-text boder"/>
        </>
    );
}
