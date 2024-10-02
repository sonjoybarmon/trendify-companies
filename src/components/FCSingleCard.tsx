import React from "react";
import { Card } from "./Card";
import Image from "next/image";
import Link from "next/link";

type Props = {
  el: any;
};

const FCSingleCard: React.FC<Props> = ({ el }) => {
  return (
    <Link href={`https://www.trendify.com/use-case/${el?.slug}`}>
      <div className="w-full md:max-w-[350px] max-w-[300px] mx-3">
        <Card>
          <div className="w-full h-full">
            <div className={`bg-[${el?.color}]`}>
              <Image
                src={el?.image}
                alt={el?.title}
                width={500}
                height={300}
                className="aspect-video object-cover max-h-[300px] border-b border-primary/50"
              />
            </div>

            <div className="px-5 py-5">
              <h2 className="md:text-2xl text-left text-xl font-bold mb-3">
                {el?.title}
              </h2>
              <p className="line-clamp-2 text-left">{el?.description}</p>

              <div className="flex justify-end mt-5">
                <Image
                  src="/arrow.svg"
                  alt="arrow"
                  width={20}
                  height={20}
                  className="object-contain cursor-pointer"
                  // onClick={() => router.push(`/use-case/${el?.slug}`)}
                />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Link>
  );
};

export default FCSingleCard;
