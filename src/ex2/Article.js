import React from "react";
import {Button, Card, CardContent, CardHeader, Typography} from "@material-ui/core";

export const Article = ({article, isOpen, onClick}) => {
    const body = isOpen && <Typography>{article.text}</Typography>

    return (
        <Card style={{maxWidth: '400px'}}>
            <CardHeader
                title={article.title}
                action={<Button onClick={() => onClick(article.id)} color='secondary' variant='contained'>Жми</Button>}
            >
            </CardHeader>
            <CardContent>
                {body}
            </CardContent>
        </Card>
    )

}
