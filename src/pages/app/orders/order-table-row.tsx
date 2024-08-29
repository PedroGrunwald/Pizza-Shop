import { Button } from "@/components/ui/button";
import { TableRow, TableCell } from "@/components/ui/table";
import { Search, ArrowRight, X } from "lucide-react";


export function OrderTableRow(){
    return (
        <TableRow>
          <TableCell>
            <Button variant="outline" size="xs">
              <Search className="h-3 w-3" />
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </TableCell>
          <TableCell className="font-mono text-xs font-medium">
            469484949889448
          </TableCell>
          <TableCell className="text-muted-foreground">
            ha 15 minutos
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-slate-400" />
              <span className="font-medium text-muted-foreground">
                Pendente
              </span>
            </div>
          </TableCell>
          <TableCell className="font-medium">
            Pedro Grunwald
          </TableCell>
          <TableCell className="font-medium">R$149,90</TableCell>
          <TableCell>
            <Button variant="outline" size="xs">
              <ArrowRight className="mr-2 h-3 w-3" />
              Aprovar
            </Button>
          </TableCell>
          <TableCell>
            <Button variant="ghost" size="xs">
              <X className="mr-2 h-3 w-3" />
              cancelar
            </Button>
          </TableCell>
        </TableRow>
      );
}