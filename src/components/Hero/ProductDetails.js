import Image from "next/image";

export default function ProductDetails() {
    return (
        <div className="w-[754px] h-[635px]">
            <div className="w-[690px] h-[38px] flex items-center">
                {/* Product Name */}
                <h1 className="w-[511px] mt-2 font-[playfair] font-[400] text-[30px] text-[#111928] leading-[37.5px]">Cheese – appareil à raclette 1/2 roue</h1>
                <Image width={1000} height={1000} src="/hero/favorite.png" alt="Like" className="w-[27px] h-[25px] ml-auto" />
            </div>

            {/* Price */}
            <div className="mt-2 flex items-center">
                <span className="text-[24px] font-[geist] font-[400] text-[#111928]">39,50€</span>
                <span className="ml-2 text-[#9C9C9C] font-[geist] font-[400] text-[14px]">/pièce</span>
            </div>

            {/* Divider */}
            <div className="bg-[#9C9C9C] border-[0.5px] my-3 mr-[1.5rem]"></div>

            <div className="mt-5 flex items-center">
                {/* Dimensions */}
                <div className="flex items-center gap-4">
                    <div className="flex items-center space-x-2">
                        <Image width={1000} height={1000} src="/hero/scale.png" alt="Length" className="w-[24px] h-[24px]" />
                        <p className="font-[geist] font-[400] text-[16px] text-[#111928]">
                            20<sup className="relative top-[-4.2px]">cm</sup>
                        </p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Image width={1000} height={1000} src="/hero/diameter.png" alt="Width" className="w-[24px] h-[24px]" />
                        <p className="font-[geist] font-[400] text-[16px] text-[#111928]">
                            50<sup className="relative top-[-4.2px]">cm</sup>
                        </p>
                    </div>
                </div>

                {/* Reference ID */}
                <div className="font-[geist] font-[500] text-[12px] text-[#9C9C9C] ml-auto pr-[25px]">RÉF : VABGN5</div>
            </div>

            {/* Divider */}
            <div className="bg-[#9C9C9C] border-[0.5px] my-4 mr-[1.5rem]"></div>

            {/* Description */}
            <div className="font-[geist] font-[500] text-[14px] text-[#5D5D5D] mt-4">
                <div>Location appareil à raclette - Raclette traditionnelle 1/2 roue</div>
                <div>Réglable en hauteur</div>
                <div>Appareil à raclette professionnel</div>
                <div>Boîtier de chauffe horizontal réglable en hauteur</div>
                <br />
                <div>220V</div>
                <div>900W</div>
            </div>

            {/* Add to Cart */}
            <div className="flex flex-col h-[50%] w-full justify-end">
                {/* Divider */}
                <div className="bg-[#9C9C9C] border-[0.5px] my-3 mr-[1.5rem]"></div>
                <div className="mt-6 flex space-x-4">
                    <input
                        type="number"
                        defaultValue="1"
                        className="w-12 border rounded text-center"
                    />
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">
                        Ajouter au Panier
                    </button>
                </div>
            </div>
        </div>
    );
}
