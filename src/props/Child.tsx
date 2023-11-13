interface ChildProps {
    color: string;
    onClick: () => void;
}

export const Child = ({color, onClick}: ChildProps) =>{
    return <div>
        {color}
        <button onClick={onClick}>ClickMe</button>
    </div>;
};

export const ChildAsFC: React.FC<ChildProps> = ({color, onClick}) => {
    return <div>
        {color}
        
        <button onClick={onClick}>ClickMe</button>

        </div>;
};

ChildAsFC.displayName

