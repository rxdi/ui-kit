import { Injectable } from '@rxdi/core';
import { BehaviorSubject, fromEvent } from 'rxjs';
import { filter } from 'rxjs/operators';

export interface Trace {
 activeIndex: number;
 path: string;
}
@Injectable()
export class GenericAppsService {
 trace: BehaviorSubject<Trace[]> = new BehaviorSubject([]);

 OnInit() {
  const cache = localStorage.getItem('trace');
  if (cache) {
   this.trace.next(JSON.parse(cache));
  }
 }

 listenForEscapeKey() {
  return fromEvent(document, 'keyup').pipe(
   filter((e) => e['key'] === 'Escape'),
  );
 }

 addTrace(trace: Trace) {
  let traces = this.trace.getValue();
  const traceExists = traces.find((t) => t.path === trace.path);
  if (traceExists) {
   if (traceExists.activeIndex !== trace.activeIndex) {
    traces = traces.filter((t) => t.path !== trace.path);
   } else {
    return;
   }
  }
  traces.push(trace);
  this.trace.next(traces);
  localStorage.setItem('trace', JSON.stringify(this.trace.getValue()));
 }

 popTrace() {
  const traces = this.trace.getValue();
  traces.pop();
  this.trace.next(traces);
  localStorage.setItem('trace', JSON.stringify(this.trace.getValue()));
 }

 clearTraces() {
  this.trace.next([]);
  localStorage.removeItem('trace');
 }

 getLastTrace() {
  const traces = this.trace.getValue();
  return traces[traces.length - 1];
 }

 traceAsObservable() {
  return this.trace.asObservable();
 }
}
