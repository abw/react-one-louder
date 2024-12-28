export type PropsObject = {
  [key: string]: unknown
}

export type ThemeContext = {
  [key: string]: RenderSpecInputOrPair
}

export type RenderSpec = null | string | RenderSpecInputFunction

export type RenderSpecInputFunction = (
  context: PropsObject
) => RenderSpecInputOrPair

export type RenderSpecInputOrPair = RenderSpecInput | RenderSpecPair
export type RenderSpecInput = RenderSpecValue | RenderSpecFunction
export type RenderSpecPair = [RenderComponent, RenderSpecInput]
export type RenderSpecValue = null | PropsObject
// export type RenderComponent = React.ComponentType<React.PropsWithRef<PropsObject>>
export type RenderComponent = React.ComponentType<PropsObject>

export type RenderSpecFunction = (
  props: PropsObject,
  ref: React.ForwardedRef<unknown>,
  context: PropsObject
) => PropsObject | React.ReactElement

export type RenderProps = {
  context: ThemeContext,
  spec: RenderSpec,
  Implementation: RenderComponent,
  props: PropsObject,
  ref: React.ForwardedRef<unknown>
}

export type ThemedType = {
  Context: unknown,
  Provider: unknown,
  Consumer: unknown,
  Component: unknown
}