import { createLogger, transports, format, Logger } from 'winston';

const customTimestampFormat = format((info) => {
    const timestamp = new Date(info.timestamp);
    const day = String(timestamp.getDate()).padStart(2, '0');
    const month = String(timestamp.getMonth() + 1).padStart(2, '0'); // Janeiro é 0
    const year = timestamp.getFullYear();
    const hours = String(timestamp.getHours()).padStart(2, '0');
    const minutes = String(timestamp.getMinutes()).padStart(2, '0');
    const seconds = String(timestamp.getSeconds()).padStart(2, '0');
    info.timestamp = `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
    return info;
});

const logger: Logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp(),
        customTimestampFormat(),
        format.json()
    ),
    transports: [
        new transports.File({ filename: 'logger_auditoria.json' }),
        new transports.Console({
            format: format.combine(
                format.colorize(),
                format.printf(({ timestamp, level, message }) => {
                    return `${timestamp} [${level}] : ${message}`;
                })
            ),
        }),
    ],
});

export default logger;