import { FC } from "react";
import Image from "next/image";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
} from "@/components/ui/pagination";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const rows = [
    {
        id: 1,
        logo: "/images/home/card-2.png",
        name: "Name",
        badge: "Buy",
        currency: "0.231ETH",
        token: "44.291",
        date: "6 seconds ago",
        transaction: "kamsmde",
    },
    {
        id: 2,
        logo: "/images/home/card-3.png",
        name: "Name",
        badge: "Sell",
        currency: "0.231ETH",
        token: "44.291",
        date: "6 seconds ago",
        transaction: "kamsmde",
    },
    {
        id: 3,
        logo: "/images/home/card-4.png",
        name: "Name",
        badge: "Buy",
        currency: "0.231ETH",
        token: "44.291",
        date: "6 seconds ago",
        transaction: "kamsmde",
    },
    {
        id: 4,
        logo: "/images/home/card-2.png",
        name: "Name",
        badge: "Sell",
        currency: "0.231ETH",
        token: "44.291",
        date: "6 seconds ago",
        transaction: "kamsmde",
    },
    {
        id: 5,
        logo: "/images/home/card-4.png",
        name: "Name",
        badge: "Sell",
        currency: "0.231ETH",
        token: "44.291",
        date: "6 seconds ago",
        transaction: "kamsmde",
    },
];

export const StaticticsTable: FC = () => {
    return (
        <div className="flex flex-col gap-8 -mr-5 sm:mr-0">
            <Table className="min-w-[600px]">
                <TableHeader>
                    <TableRow className="bg-purple pointer-events-none border-none">
                        <TableHead className="rounded-tl-xl rounded-bl-xl text-center">
                            Account
                        </TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Currency</TableHead>
                        <TableHead className="text-center">$TOKEN</TableHead>
                        <TableHead className="text-center">Date</TableHead>
                        <TableHead className="rounded-tr-xl rounded-br-xl text-center">
                            Transaction
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow className="border-none">
                        <TableCell className="h-4" />
                    </TableRow>
                    {rows.map(
                        ({
                            id,
                            logo,
                            name,
                            badge,
                            currency,
                            token,
                            date,
                            transaction,
                        }) => (
                            <TableRow
                                key={id}
                                className="border-white-30 text-xs font-inter"
                            >
                                <TableCell>
                                    <div className="flex py-1 items-center gap-2 justify-center font-normal">
                                        <Image
                                            src={logo}
                                            alt="logo"
                                            width={20}
                                            height={20}
                                            className="rounded-full"
                                        />
                                        {name}
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <Badge
                                        className={cn(
                                            "rounded-[40px] text-[11px] leading-4 px-2 font-semibold uppercase pointer-events-none shadow-none",
                                            badge === "Sell"
                                                ? "bg-red text-white"
                                                : "bg-lime text-black"
                                        )}
                                    >
                                        {badge}
                                    </Badge>
                                </TableCell>
                                <TableCell className="font-normal pr-0">
                                    {currency}
                                </TableCell>
                                <TableCell className="font-normal pr-0 text-center">
                                    {token}
                                </TableCell>
                                <TableCell className="font-normal pr-0 text-center">
                                    {date}
                                </TableCell>
                                <TableCell className="font-normal pr-0 text-center">
                                    {transaction}
                                </TableCell>
                            </TableRow>
                        )
                    )}
                </TableBody>
            </Table>
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationLink href="/launchpad">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="/launchpad">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="/launchpad">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="/launchpad">10</PaginationLink>
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
};
