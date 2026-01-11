import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

type Item = {
    value: string
    title: string
}
  
interface CustomSelectProps {
    value: string
    items: Item[]
    onChange: (value: string) => void
    className?: string
}

const CustomSelect = ({ value, items, onChange, className }: CustomSelectProps) => {
    return (
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className={`w-fit ${className} bg-white`}>
          <SelectValue />
        </SelectTrigger>
  
        <SelectContent>
          <SelectGroup>
            {items.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.title}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    )
}

export default CustomSelect