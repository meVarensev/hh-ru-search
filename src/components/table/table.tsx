import React from 'react';
import {ScrollArea, Table} from "@mantine/core";
import {ResponseData} from "../../api/types";
import {formatDateString} from "../../helpers/format-date";


interface TableSortProps {
    data: ResponseData[];
}

export const TableSort: React.FC<TableSortProps> = ({data}) => {
    if (!data) {
        return <div>No data available</div>;
    }


    return (
        <ScrollArea sx={{height: 750}}>
            <Table striped withColumnBorders bg={"white"} mt={"lg"}>
                <thead>
                <tr>
                    <th>Альтернативный URL</th>
                    <th>Область</th>
                    <th>Тип</th>
                    <th>Зарплата От</th>
                    <th>Зарплата До</th>
                    <th>Опыт</th>
                    <th>Расписание</th>
                    <th>Тип занятости</th>
                    <th>Работодатель</th>
                    <th>Ключевые навыки</th>
                    {/* Добавьте больше заголовков для других свойств */}

                    <th>Контакты</th>
                    <th>Профессиональные роли</th>
                    <th>Опубликовано</th>
                    <th>Создано</th>
                    <th>Исходно создано</th>
                    {/* Добавьте больше заголовков по мере необходимости */}
                </tr>

                </thead>
                <tbody>
                {data.map((element) => (
                    <tr key={element.id}>
                        <td color={"black"}><a href={element.alternate_url}
                                               target={"_blank"}>{element.alternate_url}</a></td>
                        <td>{element.area.name}</td>
                        <td>{element.type.name}</td>
                        <td>{element.salary?.from}</td>
                        <td>{element.salary?.to}</td>
                        <td>{element.experience.name}</td>
                        <td>{element.schedule.name}</td>
                        <td>{element.employment.name}</td>
                        <td>{element.employer.name}</td>

                        <td>
                            {element.key_skills.map((skill) => (
                                <span key={skill.name}>{skill.name}, </span>
                            ))}
                        </td>
                        {/*/!* Add more columns for other properties *!/*/}

                        <td>{element.contacts}</td>
                        <td>{element.professional_roles.map((role) => role.name).join(', ')}</td>
                        <td>{`${formatDateString(element.published_at)}`}</td>
                        <td>{`${formatDateString(element.created_at)}`}</td>
                        <td>{`${formatDateString(element.initial_created_at)}`}</td>
                        {/* Add more columns as needed */}
                    </tr>
                ))}
                </tbody>
            </Table>
        </ScrollArea>
    );
}
