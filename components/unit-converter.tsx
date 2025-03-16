"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
    conversionData,
    type ConversionCategory,
} from "@/utils/conversion-data";
import { convertValue } from "@/utils/conversion-utils";
import CategorySelector from "./category-selector";
import UnitSelector from "./unit-selector";
import ConversionInput from "./conversion-input";
import SwapButton from "./swap-button";

export default function UnitConverter() {
    const [category, setCategory] = useState<ConversionCategory>("length");
    const [fromUnit, setFromUnit] = useState<string>("");
    const [toUnit, setToUnit] = useState<string>("");
    const [fromValue, setFromValue] = useState<string>("");
    const [toValue, setToValue] = useState<string>("");
    const [error, setError] = useState<string>("");

    // Set default units when category changes
    useEffect(() => {
        const units = Object.keys(conversionData[category]);
        setFromUnit(units[0]);
        setToUnit(units[1]);
        setFromValue("");
        setToValue("");
        setError("");
    }, [category]);

    // Handle from value change
    const handleFromValueChange = (value: string) => {
        setFromValue(value);
        if (fromUnit && toUnit) {
            const { result, error } = convertValue(
                value,
                fromUnit,
                toUnit,
                category
            );
            setToValue(result);
            setError(error);
        }
    };

    // Handle unit changes
    const handleFromUnitChange = (value: string) => {
        setFromUnit(value);
        if (fromValue && toUnit) {
            const { result, error } = convertValue(
                fromValue,
                value,
                toUnit,
                category
            );
            setToValue(result);
            setError(error);
        }
    };

    const handleToUnitChange = (value: string) => {
        setToUnit(value);
        if (fromValue && fromUnit) {
            const { result, error } = convertValue(
                fromValue,
                fromUnit,
                value,
                category
            );
            setToValue(result);
            setError(error);
        }
    };

    // Handle category change
    const handleCategoryChange = (newCategory: ConversionCategory) => {
        setCategory(newCategory);
    };

    // Swap units
    const swapUnits = () => {
        const tempUnit = fromUnit;
        setFromUnit(toUnit);
        setToUnit(tempUnit);

        const tempValue = fromValue;
        setFromValue(toValue);
        setToValue(tempValue);

        if (toValue) {
            const { result, error } = convertValue(
                toValue,
                toUnit,
                fromUnit,
                category
            );
            setFromValue(result);
            setError(error);
        }
    };

    // Render conversion form
    const renderConversionForm = () => (
        <div className="grid grid-cols-[1fr,auto,1fr] gap-2 items-center">
            <div className="space-y-2">
                <UnitSelector
                    label="From"
                    value={fromUnit}
                    category={category}
                    onChange={handleFromUnitChange}
                />
                <ConversionInput
                    value={fromValue}
                    onChange={handleFromValueChange}
                    placeholder="Enter value"
                    error={!!error}
                />
            </div>

            <SwapButton onClick={swapUnits} />

            <div className="space-y-2">
                <UnitSelector
                    label="To"
                    value={toUnit}
                    category={category}
                    onChange={handleToUnitChange}
                />
                <ConversionInput
                    value={toValue}
                    placeholder="Result"
                    readOnly
                />
            </div>
        </div>
    );

    return (
        <Card className="shadow-lg max-w-3xl mx-4 p-4 sm:p-6">
            <CardContent className="pt-6">
                <CategorySelector
                    category={category}
                    onCategoryChange={handleCategoryChange}
                >
                    {renderConversionForm()}
                    {error && (
                        <p className="text-red-500 text-sm mt-2">{error}</p>
                    )}
                </CategorySelector>
            </CardContent>
        </Card>
    );
}

