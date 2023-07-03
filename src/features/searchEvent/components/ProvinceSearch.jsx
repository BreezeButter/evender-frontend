"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "../../../lib/utils"
import { Button } from "../../../components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "../../../components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "../../../components/ui/popover"



export default function ProvinceSearch({ addAllPlaceLoad, setProvince, }) {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")
    setProvince(value ? value : "");
    console.log(value, "value")





    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button

                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between bg-white text-darkbluecute text-sm  font-semibold"
                >
                    {value
                        ? addAllPlaceLoad.find(item => item.placeProvince === value)?.placeProvince : "Select Province..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0  bg-white  text-darkbluecute">
                <Command>
                    <CommandInput placeholder="Select Province..." />
                    <CommandEmpty>No framework found.</CommandEmpty>
                    <CommandGroup>
                        {addAllPlaceLoad?.map((addAllPlaceLoad, idx) => (
                            <CommandItem
                                key={idx}
                                onSelect={() => {
                                    setValue(addAllPlaceLoad.placeProvince)
                                    setOpen(false)
                                }}
                            >
                                <Check
                                    className={cn(
                                        "mr-2 h-4 w-4",
                                        addAllPlaceLoad.placeProvince === addAllPlaceLoad.placeProvince ? "opacity-100" : "opacity-0"
                                    )}
                                />
                                {addAllPlaceLoad.placeProvince}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
