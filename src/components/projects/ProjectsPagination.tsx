
import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const ProjectsPagination = () => {
  return (
    <div className="mt-12 md:mt-16 flex justify-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" className="text-askspace-red" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive className="bg-askspace-red border-askspace-red">
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" className="text-white hover:text-askspace-red">
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" className="text-askspace-red" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default ProjectsPagination;
