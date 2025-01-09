import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, map } from 'rxjs';

export interface IApartment {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
}

export interface IFilters {
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  pincode?: string;
}

export interface INestedFilters {
  key: string;
  values: { label: string; checked: boolean }[];
}

@Injectable({
  providedIn: 'root',
})
export class ApartmentsService {
  private apartmentsSubject = new BehaviorSubject<IApartment[]>([]);
  private filtersSubject = new BehaviorSubject<IFilters>({});
  private nestedFiltersSubject = new BehaviorSubject<INestedFilters[]>([]);

  constructor() {
    this.loadInitialApartments();
    this.initializeFilters();
  }

  /**
   * Loads initial apartment data. Replace with an API call if needed.
   */
  private loadInitialApartments(): void {
    const initialApartments: IApartment[] = [
      {
        id: '1',
        name: 'Dwarakamai Apartments',
        address: 'Krishnaraipuram, NAD Colony, Vepagunta',
        city: 'Visakhapatnam',
        state: 'Andhra Pradesh',
        country: 'India',
        pincode: '530047',
      },
      {
        id: '2',
        name: 'Global Infocity',
        address: '69, 3rd Main Road, CBI Colony, Kandhan Chavadi',
        city: 'Chennai',
        state: 'Tamil Nadu',
        country: 'India',
        pincode: '600096',
      },
    ];
    this.apartmentsSubject.next(initialApartments);
  }

  /**
   * Initializes nested filters based on apartment data.
   */
  private initializeFilters(): void {
    const apartments = this.apartmentsSubject.value;
    const filters = [
      /* {
        key: 'address',
        values: [...new Set(apartments.map((apt) => apt.address))].map((label) => ({
          label,
          checked: false,
        })),
      }, */
      {
        key: 'city',
        values: [...new Set(apartments.map((apt) => apt.city))].map((label) => ({
          label,
          checked: false,
        })),
      },
      {
        key: 'state',
        values: [...new Set(apartments.map((apt) => apt.state))].map((label) => ({
          label,
          checked: false,
        })),
      },
      {
        key: 'country',
        values: [...new Set(apartments.map((apt) => apt.country))].map((label) => ({
          label,
          checked: false,
        })),
      },
      {
        key: 'pincode',
        values: [...new Set(apartments.map((apt) => apt.pincode))].map((label) => ({
          label,
          checked: false,
        })),
      },
    ];
    this.nestedFiltersSubject.next(filters);
  }

  /**
   * Returns an observable of filtered apartments.
   */
  get apartments$(): Observable<IApartment[]> {
    return combineLatest([this.apartmentsSubject, this.filtersSubject]).pipe(
      map(([apartments, filters]) => this.filterApartments(apartments, filters))
    );
  }

  /**
   * Returns an observable of nested filters for rendering checkboxes.
   */
  get filters$(): Observable<INestedFilters[]> {
    return this.nestedFiltersSubject.asObservable();
  }

  /**
   * Updates the checked state of filters and applies them.
   */
  updateFilterState(key: string, label: string, checked: boolean): void {
    const currentFilters = this.nestedFiltersSubject.value.map((filter) => {
      if (filter.key === key) {
        return {
          ...filter,
          values: filter.values.map((value) =>
            value.label === label ? { ...value, checked } : value
          ),
        };
      }
      return filter;
    });

    this.nestedFiltersSubject.next(currentFilters);

    const activeFilters: IFilters = {};
    currentFilters.forEach((filter) => {
      const selectedValues = filter.values
        .filter((value) => value.checked)
        .map((value) => value.label);
      if (selectedValues.length > 0) {
        activeFilters[filter.key as keyof IFilters] = selectedValues.join(', ');
      }
    });

    this.filtersSubject.next(activeFilters);
  }

  /**
   * Adds a new apartment to the list.
   * @param apartment - Apartment to add
   */
  addApartment(apartment: IApartment): void {
    this.updateApartments([...this.apartmentsSubject.value, apartment]);
    this.initializeFilters();
  }

  /**
   * Updates an existing apartment.
   * @param id - ID of the apartment to update
   * @param updatedData - Partial data to update
   */
  updateApartment(id: string, updatedData: Partial<IApartment>): void {
    const updatedApartments = this.apartmentsSubject.value.map((apartment) =>
      apartment.id === id ? { ...apartment, ...updatedData } : apartment
    );
    this.updateApartments(updatedApartments);
    this.initializeFilters();
  }

  /**
   * Deletes an apartment by ID.
   * @param id - ID of the apartment to delete
   */
  deleteApartment(id: string): void {
    const updatedApartments = this.apartmentsSubject.value.filter(
      (apartment) => apartment.id !== id
    );
    this.updateApartments(updatedApartments);
    this.initializeFilters();
  }

  /**
   * Filters apartments based on the provided filters.
   * @param apartments - List of apartments
   * @param filters - Filters to apply
   * @returns Filtered apartments
   */
  private filterApartments(apartments: IApartment[], filters: IFilters): IApartment[] {
    return apartments.filter((apartment) =>
      Object.entries(filters).every(
        ([key, value]) =>
          !value ||
          value
            .split(', ')
            .includes(apartment[key as keyof IApartment] as string)
      )
    );
  }

  /**
   * Updates the apartments subject with the given list.
   * @param apartments - Updated list of apartments
   */
  private updateApartments(apartments: IApartment[]): void {
    this.apartmentsSubject.next(apartments);
  }
}
