'use client';
import React, { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';
import {
  CalendarBody,
  CalendarDate,
  CalendarDatePagination,
  CalendarDatePicker,
  CalendarHeader,
  CalendarItem,
  CalendarMonthPicker,
  CalendarProvider,
  CalendarYearPicker,
} from '@/components/ui/shadcn-io/calendar';

const Example = () => {
  const [exampleFeatures, setExampleFeatures] = useState([]);

  useEffect(() => {
    const statuses = [
      { id: faker.string.uuid(), name: 'Planned', color: '#6B7280' },
      { id: faker.string.uuid(), name: 'In Progress', color: '#F59E0B' },
      { id: faker.string.uuid(), name: 'Done', color: '#10B981' },
    ];

    const features = Array.from({ length: 20 }).map(() => ({
      id: faker.string.uuid(),
      name: faker.company.buzzPhrase(),
      startAt: faker.date.past({ years: 0.5, refDate: new Date() }),
      endAt: faker.date.future({ years: 0.5, refDate: new Date() }),
      status: faker.helpers.arrayElement(statuses),
    }));

    setExampleFeatures(features);
  }, []);

  if (exampleFeatures.length === 0) return null; 

  const earliestYear = Math.min(
    ...exampleFeatures.map((f) => f.startAt.getFullYear())
  );
  const latestYear = Math.max(
    ...exampleFeatures.map((f) => f.endAt.getFullYear())
  );

  return (
    <CalendarProvider>
      <CalendarDate>
        <CalendarDatePicker>
          <CalendarMonthPicker />
          <CalendarYearPicker start={earliestYear} end={latestYear} />
        </CalendarDatePicker>
        <CalendarDatePagination />
      </CalendarDate>
      <CalendarHeader />
      <CalendarBody features={exampleFeatures}>
        {({ feature }) => <CalendarItem feature={feature} key={feature.id} />}
      </CalendarBody>
    </CalendarProvider>
  );
};

export default Example;
