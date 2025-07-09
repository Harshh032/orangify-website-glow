
import { Search, Filter, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const LibraryPage = () => {
  const papers = [
    {
      title: "Regeneration of the heart",
      authors: "Matthew L Steinhauser, Richard T Lee",
      fullText: "Full text available",
      filename: "emmm0003-0701.pdf",
      dateAdded: "Jun 28, 2025",
      tags: []
    }
  ];

  const columns = ["Title", "Authors", "Full text", "Filename", "Date Added", "Tags"];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Library</h1>
        <div className="flex items-center space-x-4">
          <Button variant="outline">
            Connect Zotero
          </Button>
          <Button className="bg-primary hover:bg-primary/90">
            <Upload className="h-4 w-4 mr-2" />
            Upload
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search your library..."
            className="pl-10 w-80"
          />
        </div>
      </div>

      {/* Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  {columns.map((column) => (
                    <th key={column} className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {papers.map((paper, index) => (
                  <tr key={index} className="hover:bg-muted/25 cursor-pointer">
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-primary hover:underline">
                        {paper.title}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-muted-foreground">
                        {paper.authors}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-muted-foreground">
                        {paper.fullText}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-muted-foreground">
                        {paper.filename}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-muted-foreground">
                        {paper.dateAdded}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-muted-foreground">
                        {paper.tags.length > 0 ? paper.tags.join(", ") : "-"}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LibraryPage;
