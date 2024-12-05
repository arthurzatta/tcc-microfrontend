declare module "mfe-auth/Auth" {
  export function mount(
    el: HTMLElement | null,
    options: any
  ): { onParentNavigate: any };
}
