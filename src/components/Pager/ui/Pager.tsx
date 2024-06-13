import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

const Pager = () => {
  return (
    <div className="flex justify-center items-center gap-4 my-4">
      <Button className="rounded-full" size="icon" variant="ghost">
        <ChevronLeftIcon className="h-5 w-5" />
      </Button>
      <div className="flex items-center gap-2">
        <Button className="px-3 py-1 rounded-full font-medium" variant="link">
          1
        </Button>
        <Button
          className="px-3 py-1 rounded-full font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          variant="link"
        >
          2
        </Button>
        <Button
          className="px-3 py-1 rounded-full font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          variant="link"
        >
          3
        </Button>
        <span className="text-gray-500 dark:text-gray-400">...</span>
        <Button
          className="px-3 py-1 rounded-full font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          variant="link"
        >
          8
        </Button>
        <Button
          className="px-3 py-1 rounded-full font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          variant="link"
        >
          9
        </Button>
        <Button
          className="px-3 py-1 rounded-full font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          variant="link"
        >
          10
        </Button>
      </div>
      <Button className="rounded-full" size="icon" variant="ghost">
        <ChevronRightIcon className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default Pager;
