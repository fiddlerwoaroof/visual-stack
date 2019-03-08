import * as React from "react";
import {ReactNode} from "react";

export interface CollapsiblePanelProps {
    title: string;
    className?: string;
    initializedCollapse?: boolean;
    children: ReactNode;
}

export declare class CollapsiblePanel extends React.Component <CollapsiblePanelProps> {

}

export default CollapsiblePanel;