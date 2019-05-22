
//adding a column

ALTER TABLE houses
ADD COLUMN like_house
TYPE boolean;


//dropping a column

ALTER TABLE houses
DROP COLUMN zip;


//renaming a column

ALTER TABLE houses
RENAME COLUMN name TO estate_name;


//renaming a table name

ALTER TABLE houses RENAME TO the_houses;


