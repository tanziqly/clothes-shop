import { Input } from "@/shared/ui/shadcn/input";
import { Search } from "lucide-react";
import clsx from "clsx"; // Для удобного объединения классов

interface SearchInputProps {
  className?: string; // Пропс для кастомизации классов
}

const SearchInput = ({ className }: SearchInputProps) => (
  <div
    className={clsx(
      "relative w-full min-w-[200px] flex-1 flex items-center",
      className
    )}
  >
    {/* Иконка поиска */}
    <Search className="absolute left-6 text-gray-500" />

    {/* Поле ввода */}
    <Input
      className="pl-12 mx-4" // Добавляем padding слева для размещения иконки
      placeholder="Type something..."
      type="text"
    />
  </div>
);

export default SearchInput;
