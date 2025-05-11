"use client";

import { Button } from "@/components/Button";
import { FC } from "react";

import { TradeFormInput } from "./TradeFormInput";
import { ChevronSeparator } from "@/components/ChevronSeparator";
import { NATIVE_TOKEN_SYMBOL } from "@/utils/chains";

export const TradeForm: FC = () => {
  return (
    <div className="flex flex-col gap-[28px] border border-black rounded-[20px] p-6">
      <h2 className="font-square text-[32px] leading-8 mb-[28px]">
        BUY/SELL TOKEN
      </h2>
      <div className="grid grid-cols-2 gap-2">
        <Button
          type="button"
          variant="contained"
          color="lime"
          text="BUY"
          onClick={() => {}}
        />
        <Button
          type="button"
          variant="contained"
          color="transparent"
          text="SELL"
          onClick={() => {}}
        />
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col">
          <span className="text-xs leading-3 tracking-wide text-black-70 font-semibold mb-2.5">
            Available:{" "}
            <span className="text-black">234.23321 {NATIVE_TOKEN_SYMBOL}</span>
          </span>
          <TradeFormInput type="toPay" />
          <div className="flex gap-1 py-8">
            <ChevronSeparator length={10} />
          </div>
          <TradeFormInput type="toReceive" />
        </div>
      </div>
      <Button
        type="button"
        variant="contained"
        color="blue"
        text="Place Trade"
        onClick={() => {}}
      />
    </div>
  );
};
