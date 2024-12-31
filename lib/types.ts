export type ContextPropsObject = {
  [key: string]: unknown
}

export type ContextPropsWithChildren = React.PropsWithChildren<ContextPropsObject>

export type ContextProviderProps = React.ProviderProps<ContextPropsObject>

export type ContextProvider = React.ProviderExoticComponent<ContextProviderValue>

export type ContextProviderWrapper = ({ children, ...props }: ContextPropsWithChildren) => ContextProvider

export type ContextProviderValue = {
  [key: string]: unknown | RenderSpecInputOrPair
}

export type ThemeContext = {
  [key: string]: RenderSpecInputOrPair
}

export type RenderSpec = null | string | RenderSpecInputFunction

export type RenderSpecInputFunction = (
  context: ContextPropsObject
) => RenderSpecInputOrPair

export type RenderSpecInputOrPair = RenderSpecInput | RenderSpecPair
export type RenderSpecInput = RenderSpecValue | RenderSpecFunction
export type RenderSpecPair = [RenderComponent, RenderSpecInput]
export type RenderSpecValue = null | ContextPropsObject
export type RenderComponent = React.ComponentType<ContextPropsObject>

export type RenderSpecFunction = (
  props: ContextPropsObject,
  ref: React.ForwardedRef<unknown>,
  context: ContextPropsObject
) => ContextPropsObject | React.ReactElement

export type RenderProps = {
  context: ThemeContext,
  spec: RenderSpec,
  Implementation: RenderComponent,
  props: ContextPropsObject,
  ref: React.ForwardedRef<unknown>
}

export type ThemedType = {
  Context: React.Context<ContextPropsObject>,
  Provider: ContextProviderWrapper,
  Consumer: unknown,
  Component: unknown
}