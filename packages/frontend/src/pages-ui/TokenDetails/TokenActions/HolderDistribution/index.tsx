import { FC } from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const rows = [
    {
        id: 1,
        logo: "/images/home/card-2.png",
        name: "Name",
        percent: 90,
        isTop: true,
    },
    {
        id: 2,
        logo: "/images/home/card-3.png",
        name: "Name",
        percent: 5,
    },
    {
        id: 3,
        logo: "/images/home/card-4.png",
        name: "Name",
        percent: 4,
    },
    {
        id: 4,
        logo: "/images/home/card-5.png",
        name: "Name",
        percent: 3,
    },
    {
        id: 5,
        logo: "/images/home/card-1.png",
        name: "Name",
        percent: 3,
    },
];

export const HolderDistribution: FC = () => {
    return (
        <div className="flex flex-col gap-4 border border-black rounded-[20px] p-6">
            <h4 className="font-inter text-base leading-4 font-semibold">
                Bonding curve progress
            </h4>
            <Table>
                <TableBody>
                    {rows.map(({ id, logo, name, percent, isTop }) => (
                        <TableRow
                            key={id}
                            className="border-white-30 font-normal text-xs font-inter"
                        >
                            <TableCell>{id}</TableCell>
                            <TableCell className="flex flex-1 items-center gap-2">
                                <Image
                                    src={logo}
                                    alt="logo"
                                    width={20}
                                    height={20}
                                    className="rounded-full"
                                />
                                {name}
                            </TableCell>
                            <TableCell align="right">
                                {isTop && (
                                    <Badge className="rounded-[40px] bg-sky-blue px-2 py-0.5 text-xs font-semibold text-black pointer-events-none shadow-none ml-auto">
                                        BON. CURVE
                                    </Badge>
                                )}
                            </TableCell>
                            <TableCell className="text-right font-semibold pr-0">
                                {percent}%
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};
