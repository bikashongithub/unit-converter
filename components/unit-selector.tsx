"use client";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    conversionData,
    type ConversionCategory,
} from "@/utils/conversion-data";
import { formatUnitName } from "@/utils/conversion-utils";

interface UnitSelectorProps {
    label: string;
    value: string;
    category: ConversionCategory;
    onChange: (value: string) => void;
}

export default function UnitSelector({
    label,
    value,
    category,
    onChange,
}: UnitSelectorProps) {
    return (
        <div className="space-y-2">
            <label className="text-sm font-medium">{label}</label>
            <Select value={value} onValueChange={onChange}>
                <SelectTrigger>
                    <SelectValue placeholder="Select unit" />
                </SelectTrigger>
                <SelectContent>
                    {Object.keys(conversionData[category]).map((unit) => (
                        <SelectItem key={unit} value={unit}>
                            {formatUnitName(unit)}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
}

