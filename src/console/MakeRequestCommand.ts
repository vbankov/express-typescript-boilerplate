/**
 * MakeRequestCommand
 * -------------------------------------
 *
 */
import { AbstractMakeCommand } from './AbstractMakeCommand';


export class MakeRequestCommand extends AbstractMakeCommand {

    static command = 'make:request';
    static description = 'Generate new request';

    public type = 'Request';
    public suffix = 'Request';
    public prefix = '';
    public template = 'request.hbs';
    public target = 'api/requests';

    constructor(context: any, prefix?: string) {
        super(context);
        this.prefix = prefix || '';
    }

}