import { _$LH as _$LH$1, noChange } from './lit-html.js';

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
// Contains either the minified or unminified `_$resolve` Directive method name.
let resolveMethodName = null;
/**
 * END USERS SHOULD NOT RELY ON THIS OBJECT.
 *
 * We currently do not make a mangled rollup build of the lit-ssr code. In order
 * to keep a number of (otherwise private) top-level exports mangled in the
 * client side code, we export a _$LH object containing those members (or
 * helper methods for accessing private fields of those members), and then
 * re-export them for use in lit-ssr. This keeps lit-ssr agnostic to whether the
 * client-side code is being used in `dev` mode or `prod` mode.
 * @private
 */
const _$LH = {
    boundAttributeSuffix: _$LH$1._boundAttributeSuffix,
    marker: _$LH$1._marker,
    markerMatch: _$LH$1._markerMatch,
    HTML_RESULT: _$LH$1._HTML_RESULT,
    getTemplateHtml: _$LH$1._getTemplateHtml,
    overrideDirectiveResolve: (directiveClass, resolveOverrideFn) => class extends directiveClass {
        _$resolve(_part, values) {
            return resolveOverrideFn(this, values);
        }
    },
    patchDirectiveResolve: (directiveClass, resolveOverrideFn) => {
        if (directiveClass.prototype._$resolve !== resolveOverrideFn) {
            resolveMethodName ??= directiveClass.prototype._$resolve
                .name;
            for (let proto = directiveClass.prototype; proto !== Object.prototype; proto = Object.getPrototypeOf(proto)) {
                if (proto.hasOwnProperty(resolveMethodName)) {
                    proto[resolveMethodName] = resolveOverrideFn;
                    return;
                }
            }
            // Nothing was patched which indicates an error. The most likely error is
            // that somehow both minified and unminified lit code passed through this
            // codepath. This is possible as lit-labs/ssr contains its own lit-html
            // module as a dependency for server rendering client Lit code. If a
            // client contains multiple duplicate Lit modules with minified and
            // unminified exports, we currently cannot handle both.
            throw new Error(`Internal error: It is possible that both dev mode and production mode` +
                ` Lit was mixed together during SSR. Please comment on the issue: ` +
                `https://github.com/lit/lit/issues/4527`);
        }
    },
    setDirectiveClass(value, directiveClass) {
        // This property needs to remain unminified.
        value['_$litDirective$'] = directiveClass;
    },
    getAttributePartCommittedValue: (part, value, index) => {
        // Use the part setter to resolve directives/concatenate multiple parts
        // into a final value (captured by passing in a commitValue override)
        let committedValue = noChange;
        // Note that _commitValue need not be in `stableProperties` because this
        // method is only run on `AttributePart`s created by lit-ssr using the same
        // version of the library as this file
        part._commitValue = (value) => (committedValue = value);
        part._$setValue(value, part, index);
        return committedValue;
    },
    connectedDisconnectable: (props) => ({
        ...props,
        _$isConnected: true,
    }),
    resolveDirective: _$LH$1._resolveDirective,
    AttributePart: _$LH$1._AttributePart,
    PropertyPart: _$LH$1._PropertyPart,
    BooleanAttributePart: _$LH$1._BooleanAttributePart,
    EventPart: _$LH$1._EventPart,
    ElementPart: _$LH$1._ElementPart,
    TemplateInstance: _$LH$1._TemplateInstance,
    isIterable: _$LH$1._isIterable,
    ChildPart: _$LH$1._ChildPart,
};

export { _$LH };
//# sourceMappingURL=private-ssr-support.js.map
