/**
 * Entry point of the plugin.
 *
 * TypeDoc will call the exported function of the plugin upon loading. Setup the plugin
 * and attach event listeners to the required components:
 * - app: Main application instance,
 *   see http://typedoc.io/api/classes/td.application.html
 * - app.converter: Converts TypeScript compiler symbols to reflections,
 *   see http://typedoc.io/api/modules/td.converter.html
 * - app.renderer: Renders resolved reflections to templates,
 *   see http://typedoc.io/api/classes/td.output.renderer.html
 *
 * @param app  The current instance of the TypeDoc application.
 * @param td  The TypeDoc namespace.
 */
module.exports = function (app, td) {
    var version = '0.1.0';
    /**
     * Add additional options to the options parser.
     *
     * See http://typedoc.io/api/interfaces/td.iparameter.html for details on the available configuration.
     */
    app.on(td.Application.EVENT_COLLECT_PARAMETERS, function (parser) {
        parser.addParameter({
            name: 'exampleOption',
            help: 'Some example option.',
            defaultValue: 'example option default value'
        });
    });
    /**
     * When the renderer begins, process the given guide directory.
     */
    app.converter.on(td.converter.Converter.EVENT_BEGIN, function (context) {
        app.logger.writeln('Using example plugin %s with option "%s"', version, app.options.exampleOption);
    });
};
