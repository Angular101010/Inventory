import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface DataTableItem {
  name: string;
  id: number;
  model: string;
  CPU: string;
  ram: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: DataTableItem[] = [
  {id: 1, name: 'Sam', model: 'Dell 7020', CPU:'i5-3470', ram:'16.0 GB' },
  {id: 2, name: 'Bill', model: 'Dell 9010', CPU:'i5-3470', ram:'16.0 GB'},
  {id: 3, name: 'Robert', model:  'Dell 7020', CPU:'i5-3470', ram:'16.0 GB'},
  {id: 4, name: 'Brandon', model:  'Dell 7020', CPU:'i5-3470', ram:'16.0 GB'},
  {id: 5, name: 'Kent', model: 'Dell 9010', CPU:'i5-3470', ram:'16.0 GB'},
  {id: 6, name: 'Mark', model:  'Dell 7020', CPU:'i5-3470', ram:'16.0 GB'},
  {id: 7, name: 'Jared', model:  'Dell 7020', CPU:'i5-3470', ram:'16.0 GB'},
  {id: 8, name: 'Lauren', model: 'Dell 9020', CPU:'i5-3470', ram:'16.0 GB'},
  {id: 9, name: 'Cedrick', model:  'Dell 7020', CPU:'i5-3470', ram:'16.0 GB'},
  {id: 10, name: 'Parker', model: 'Dell 9010', CPU:'i5-3470', ram:'16.0 GB'},
  {id: 11, name: 'Batman', model:  'Dell 7020', CPU:'i5-3470', ram:'16.0 GB'},
  {id: 12, name: 'Ironman', model: 'Dell 9020', CPU:'i5-3470', ram:'16.0 GB'},
  {id: 13, name: 'Brainiac', model:  'Dell 7020', CPU:'i5-3470', ram:'16.0 GB'},
  {id: 14, name: 'Superman', model: 'Dell 7020', CPU:'i5-3470', ram:'16.0 GB'},
  {id: 15, name: 'Star Lord', model: 'Dell 7020', CPU:'i5-3470', ram:'16.0 GB'},
  {id: 16, name: 'Thrall', model: 'Dell 9020', CPU:'i5-3470', ram:'16.0 GB'},
  {id: 17, name: 'Anduwin', model: 'Dell 7020', CPU:'i5-3470', ram:'16.0 GB'},
  {id: 18, name: 'Frodo', model: 'Dell 9010', CPU:'i5-3470', ram:'16.0 GB'},
  {id: 19, name: 'Gandolf', model: 'Dell 9020', CPU:'i5-3470', ram:'16.0 GB'},
  {id: 20, name: 'Quill', model: 'Dell 7020', CPU:'i5-3470', ram:'16.0 GB'},
];

/**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DataTableDataSource extends DataSource<DataTableItem> {
  data: DataTableItem[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<DataTableItem[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: DataTableItem[]): DataTableItem[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: DataTableItem[]): DataTableItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'model': return compare(+a.model, +b.model, isAsc);
        case 'CPU': return compare(+a.CPU, +b.CPU, isAsc);
        case 'ram': return compare(+a.ram, +b.ram, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
