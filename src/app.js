import { run } from './app/run';
import { AlertService } from './app/alert.service';
import { ComponentService } from './app/component.service';
import './app.scss';

run(new AlertService(), new ComponentService());
