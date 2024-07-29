export interface ButtonProps {
    text: string;
    type: string;
    onClick: () => void;
}

export interface HeaderProps {
    title: string;
    leftChild: React.ReactNode;
    rightChild: React.ReactNode;
}