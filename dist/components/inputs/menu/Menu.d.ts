import { MenuProps } from './Menu.types';
interface MenuContextType {
    current?: HTMLElement | null;
}
export declare function useMenuRef(): MenuContextType | null;
export default function Menu({ children, label, icon, checked, orientation, className }: MenuProps): import("react/jsx-runtime").JSX.Element;
export {};
