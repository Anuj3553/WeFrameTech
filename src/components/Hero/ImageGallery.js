import Image from "next/image";

export default function ImageGallery() {
    return (
        <div className="flex flex-col">
            <div className="relative ml-[1rem] w-[720px] h-[652px] bg-[#F8F6F4] flex justify-center items-center rounded-md">
                {/* Side Bar Images  */}
                <div className="absolute top-[15px] left-[15px] flex flex-col gap-2">
                    {/* 1st Image */}
                    <div className="w-[55px] h-[55px] bg-[#fff] flex justify-center items-center rounded-sm hover:opacity-100 hover:outline hover:cursor-pointer">
                        <Image width={1000} height={1000} src="/hero/table.png" alt="Cheese Machine" className="w-[60px] h-[60px] p-2" />
                    </div>
                    {/* 2nd Image */}
                    <div className="w-[55px] h-[55px] bg-[#fff] flex justify-center items-center rounded-sm opacity-85 hover:opacity-100 hover:outline hover:cursor-pointer">
                        <Image width={1000} height={1000} src="/hero/table.png" alt="Cheese Machine" className="w-[60px] h-[60px] p-2" />
                    </div>
                    {/* 3rd Image */}
                    <div className="w-[55px] h-[55px] bg-[#fff] flex justify-center items-center rounded-sm opacity-65 hover:opacity-100 hover:outline hover:cursor-pointer">
                        <Image width={1000} height={1000} src="/hero/table.png" alt="Cheese Machine" className="w-[60px] h-[60px] p-2" />
                    </div>
                    {/* 4th Image */}
                    <div className="w-[55px] h-[55px] bg-[#fff] flex justify-center items-center rounded-sm opacity-50 hover:opacity-100 hover:outline hover:cursor-pointer">
                        <Image width={1000} height={1000} src="/hero/table.png" alt="Cheese Machine" className="w-[60px] h-[60px] p-2" />
                    </div>
                </div>

                {/* Main Image */}
                <Image width={5000} height={5000} src="/hero/machine.png" alt="Cheese Machine" className="w-[552px] h-[552px] p-2" />
            </div>
        </div>
    );
}
